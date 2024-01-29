# crawl
Very simple Crawler
if you want to get data to json to this
<code>
scrapeProgrammingLanguages()
  .then(data => {
    // Writing the scraped data to a JSON file
    fs.writeFile('tableData.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Successfully wrote data to tableData.json');
      }
    });
  })
  .catch(error => console.error('Error:', error));
</code>
