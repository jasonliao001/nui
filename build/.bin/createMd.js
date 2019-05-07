var fs = require('fs');
var navigate = require('../../examples/nav.config.js');
const dir = 'examples';
navigate.forEach(item => {
  if (item.groups && item.groups.length) {
    item.groups.forEach(child => {
      child.list.forEach(component => {
        let name = component.path.split('/')[1];
        if (!fs.existsSync(`./${dir}/docs/${name}.md`)) {
          fs.writeFile(`./${dir}/docs/${name}.md`, `# ${name}`, err => {
            if (err) throw err;
            console.log(`${name}.md create success`);
          });
        } else {
          console.log(`${name}.md is exist `);
        }
      });
    });
  }
});
