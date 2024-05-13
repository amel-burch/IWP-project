$(document).ready(function () {
    fetchData();

    function fetchData() {
        $.ajax({
            url: `http://localhost:80/IWP-project/backend/recipes`,
            type: "GET",
            dataType: "json",
            beforeSend: function (xhr) {
                if (JSON.parse(window.localStorage.getItem("user"))) {
                    console.log(JSON.parse(window.localStorage.getItem("user")).user.token);
                  xhr.setRequestHeader(
                    "Authentication",
                    JSON.parse(window.localStorage.getItem("user")).user.token
                  );
                }
              },
            success: function (data) {
                console.log(data);
                renderData(data);
            },
            error: function (err) {
                console.log('Error name:', err);
            }
        });
    }

    function navigateToPage(event, id) {
        event.preventDefault();
        var url = `http://localhost/IWP-project/receipe-post.html?id=${id}`;
        window.location.href = url;
    }

    $('#receipes').on('click', 'a', (event) => {
        navigateToPage(event, event.target.id);
    }); 
    

    function renderData(data) {
        let html = "<h1> No data</h1>"
        if (data?.length === 0) {
            $("#receipes").html(html);
            return;
        }

        html = "";
        html = data.map((item) => {
            return `<div class="col-12 col-sm-6 col-lg-4">
            <div class="single-best-receipe-area mb-30">
                <img src="${item.picture}" alt="">
                <div class="receipe-content">
                <a href="#" id="${item.id}">
                    <h5 id="${item.id}">${item.name}</h5>
                </a>
                    <div class="ratings">
                        ${getRating(item.rating)}
                    </div>
                </div>
            </div>
        </div>`
        })

        $("#receipes").html(html);
    }

    function getRating(rating) {
        let html = "";

        for (let i = 0; i < rating; i++) {
            html += `<i class="fa fa-star" aria-hidden="true"></i>`
        }
        return html;
    }
});