const cron = require('node-cron');
const request = require('request-promise');
const cheerio = require('cheerio');
const moment = require('moment');
const NoticiasData = require('../../db/schemas/NoticiasSchema')

const taskNoticias = cron.schedule('*/10 * * * *', () => {
    const scrapData = async function main() {
        const result = await request.get('https://www.worldometers.info/coronavirus/#countries');
        const $ = cheerio.load(result);
    const info =  $(`#newsdate${moment().format('YYYY-MM-DD')}`).toArray().map((data) =>{
            { return ($(data).text())}
        });
        const editInfo = unescape(info).split('[source]');
        let noticiasData ={
            Div: `#newsdate${moment().format('YYYY-MM-DD')}`,
            InfoNoticias: editInfo
        };
        let updateNoticias = await NoticiasData.findOneAndUpdate({Div: `#newsdate${moment().format('YYYY-MM-DD')}`},noticiasData,{ upsert: true});
    };

    scrapData();
    console.log('Noticias atualizadas')
});

module.exports = taskNoticias
