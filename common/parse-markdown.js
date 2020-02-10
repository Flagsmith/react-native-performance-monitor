const each = require('lodash/each');
const map = require('lodash/map');
const moment = require('moment');

const splitAt = index => x => [x.slice(0, index), x.slice(index)];

module.exports = (source) => {
    const match = source.match(/---.*?---\n*/sg);
    const metaLength = match && match[0].length;
    const split = splitAt(metaLength)(source);
    const meta = split[0].split('\n');
    const content = split[1];
    const res = {
        content,
    };
    each(meta, (item) => {
        if (item.includes('title: ')) {
            res.title = item.replace('title: ', '');
        }
        if (item.includes('description: ')) {
            res.description = item.replace('description: ', '');
        }
        if (item.includes('author: ')) {
            res.author = item.replace('author: ', '');
        }
        if (item.includes('avatar: ')) {
            res.avatar = item.replace('avatar: ', '');
        }
        if (item.includes('date: ')) {
            const m = moment(item.replace('date: ', ''), 'DD-MMM-YYYY');
            res.dateFormatted = m.format('MMM DD YYYY');
            res.date = m.toISOString();
            res.sort = -m.valueOf();
        }
        if (item.includes('tags: ')) {
            res.tags = map(item.replace('tags: ', '').split(','), i => i.trim().toLowerCase()).sort();
        }
    });
    return res;
};
