function handleSubmitForAylien(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;

    if (Client.validateUrl(url)) {
        fetch("http://localhost:3000/api", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url})
        })
        .then(res => res.json())
        .then((res) => {
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence
            document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence
        })
    } else {
        alert("This is not a valid URL. Please check again!")

    }
}

export { handleSubmitForAylien }