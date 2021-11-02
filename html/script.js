(function fetchApiDemo(){
    const form = document.querySelector('#form');
    const apiInput = document.querySelector('#api-input');
    const apiCallType = document.querySelector('#api-call-type');
    const submit = document.querySelector('#submit');
    const apiOutput = document.querySelector('#api-output');
    let url = 'https://jsonplaceholder.typicode.com/posts'
    form.addEventListener('submit', onFormSubmit);

    function onFormSubmit(event){
        event.preventDefault();
        if(apiCallType.value === 'get'){
            let id = apiInput.value;
            if(isNaN(id)) alert('Please enter a valid id to get');
            else{
                fetch(`${url}/${apiInput.value}`)
                .then(response => response.json())
                .then(json => apiOutput.textContent = JSON.stringify(json))
                .catch(error => apiOutput.textContent = 'An error occurred while getting data!')
            }
        }

        else if(apiCallType.value === 'post'){
            fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiInput.value),
            })
            .then(response => response.json)
            .then(data => apiOutput.textContent = 'Data Posted successfully')
            .catch(error => apiOutput.textContent = `An error occured while posting! Details: ${error}`)
        }

        else if(apiCallType.value === 'delete'){
            let id = apiInput.value;
            if(isNaN(id)) alert('Please enter a valid id to delete');
            else{
                fetch(`${url}/${apiInput.value}`, {
                    method: 'DELETE',
                })
                .then(response => response.json())
                .then(json => apiOutput.textContent = 'Deleted Successfully')
                .catch(error => apiOutput.textContent = 'An error occurred while deleting')
            }
        }
    }

})();