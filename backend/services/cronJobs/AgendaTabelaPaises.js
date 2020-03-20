const cron = require('node-cron');
const request = require('request-promise');
const cheerio = require('cheerio');
const PaisesData = require('../../db/schemas/tabelaPaisesSchema');
const Excel = require('exceljs');
const taskTabelaPaises = cron.schedule('*/10 * * * *', () => {
    const scrapData = async function main() {
        const result = await request.get('https://www.worldometers.info/coronavirus/#countries');
        const $ = cheerio.load(result);
        const scrapedData = [];
        $("#main_table_countries_today tbody tr").each((index, element) => {
          const tds = $(element).find('td');
          const pais = $(tds[0]).text();
          const casototais = $(tds[1]).text();
          const novosCasos = $(tds[2]).text();
          const totalMortes = $(tds[3]).text();
          const novasMortes = $(tds[4]).text();
          const recuperados = $(tds[5]).text();
          const casosAtivos = $(tds[6]).text();
          const casosCriticos = $(tds[7]).text();
          const casosPorUmMilhao = $(tds[8]).text();
          const tableData = { pais, casototais, novosCasos,totalMortes,novasMortes,recuperados,casosAtivos,casosCriticos,casosPorUmMilhao };
          scrapedData.push(tableData);
        });
        let paisesData ={
           Div: 'main_table_countries_today',
           InfoPaises: scrapedData
        }
        let updatePaises = await PaisesData.findOneAndUpdate({Div: 'main_table_countries_today'},paisesData,{ upsert: true})
        }
        
       scrapData();
       PaisesData.findOne({Div: 'main_table_countries_today'})
       .then((dataCorona)=>{
        let workbookAtualizado = new Excel.Workbook();
        let sheetAtualizado = workbookAtualizado.addWorksheet('Corona_Lista_Países');
        sheetAtualizado.columns = [
            { header: 'País', key: 'país', width: 15 },
            { header: 'Caso Totais', key: 'casoTotais', width: 15 },
            { header: 'Novos Casos', key: 'novosCasos', width: 15 },
            { header: 'Total Mortes', key: 'totalMortes', width: 15 },
            { header: 'Novas Mortes', key: 'novasMortes', width: 15 },
            { header: 'Recuperados', key: 'recuperados', width: 15 },
            { header: 'Casos Ativos', key: 'casosAtivos', width: 15 },
            { header: 'Casos Críticos', key: 'casosCriticos', width: 15 },
            { header: 'Casos por Milhão', key: 'casosMilhao', width: 15 }

          ];
          for (let index = 0; index < dataCorona.InfoPaises.length; index++) {
            const {pais,casototais, novosCasos,totalMortes,novasMortes,recuperados,casosAtivos,casosCriticos,casosPorUmMilhao} = dataCorona.InfoPaises[index];
            sheetAtualizado.addRow([
                pais,casototais, novosCasos,totalMortes,novasMortes,recuperados,casosAtivos,casosCriticos,casosPorUmMilhao
            ]);
            workbookAtualizado.xlsx
          .writeFile(`./public/Corona_Lista.xlsx`)
            .then(()=> {}); 
        };
       })
       console.log('Tabela de países atualizada')
      
});

module.exports = taskTabelaPaises