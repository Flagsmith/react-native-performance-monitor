const join = require('path').join;
const sortBy = require('lodash/sortBy');
const uniq = require('lodash/uniq');

const testFolder = join(__dirname, '../static/pages-blog-markdown');
const jsFolder = join(__dirname, '../pages/blog');
const blogOutput = join(__dirname, '../static/blog.json');
const fs = require('fs');
const path = require('path');
const parseMarkdown = require('../common/parse-markdown');

const files = fs.readdirSync(testFolder);
const existingJSFiles = fs.readdirSync(jsFolder);
let res = [];
let allTags = [];

const writeJSTemplate = md => `
import propTypes from 'prop-types';
import md from '../../static/pages-blog-markdown/${md}';
import BlogPost from '../../components/BlogPost';


const BlogPostPage = props => (
    <BlogPost
      route={props.router.route}
      source={md}
    />
);

BlogPostPage.displayName = 'BlogPostPage';
BlogPostPage.propTypes = {
    router: propTypes.object,
};

export default BlogPostPage;
`;

files.forEach((file) => {
    const md = fs.readFileSync(`${testFolder}/${file}`, 'utf8');
    const data = parseMarkdown(md);
    const targetJSFile = file.replace('.md', '.js');
    allTags = allTags.concat(data.tags);
    // eslint-disable-next-line no-console
    console.log('Processing', file);
    if (existingJSFiles.indexOf(targetJSFile) === -1) {
        // eslint-disable-next-line no-console
        console.log('File exists', targetJSFile);
        fs.writeFileSync(path.join(jsFolder, targetJSFile), writeJSTemplate(file));
    }
    res.push({
        ...data,
        url: file.replace('.md', ''),
        content: null,
    });
});
res = sortBy(res, 'sort');
res[0].allTags = uniq(allTags);
fs.writeFileSync(blogOutput, JSON.stringify(res));
// eslint-disable-next-line no-console
console.log(`Wrote blog to ${blogOutput}`);

