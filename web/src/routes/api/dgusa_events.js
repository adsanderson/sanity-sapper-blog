import client from '../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get(req, res) {
    try {
        const dgusa_events = await client.fetch('*[_type == "dgusa_event"]')
        res.end(JSON.stringify({ dgusa_events }));
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: err.message
        }));
    }
};