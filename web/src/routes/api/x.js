// import { Parser } from 'rss-parser';

let Parser = require('rss-parser');





/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get(req, res) {

    let parser = new Parser();


    try {
        let feed = await parser.parseURL('https://feeds.redcircle.com/4b3b919b-a554-4e6b-90ff-95d2c1f8701c');
        console.log(feed.title);

        feed.items.filter(item => {
            return item.title.indexOf("Rewind and Rewatch") !== -1;
        }).forEach(item => {
            console.log(item.title + ':' + item.link);

        });
        res.end(JSON.stringify({}));
    } catch (err) {

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};