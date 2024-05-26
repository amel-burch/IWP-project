$(document).ready(function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    fetchData();

    function fetchData() {
        $.ajax({
            url: `http://localhost:80/IWP-project/backend/recipes/${id}`,
            type: "GET",
            dataType: "json",
            beforeSend: function (xhr) {
                if (JSON.parse(window.localStorage.getItem("user"))) {
                    xhr.setRequestHeader(
                        "Authentication",
                        JSON.parse(window.localStorage.getItem("user")).user.token
                    );
                }
            },
            success: function (data) {
                renderData(data);
            },
            error: function () {
                $("#result").html("Error fetching data.");
            }
        });
    }

    function renderData(data) {
        renderImage(data.picture);
        renderMealDetails(data);
        renderRating(data.rating);
        renderSteps(data.steps);
        renderIngredients(data.ingredients);
    }

    function renderImage(img) {
        if (!img) return;
        let html = "<h1>No data</h1>"
        if (img === null) {
            $("#receipe-img-slider").html(html);
            return;
        }

        html = `<img src="${img}" alt="">`;

        $("#receipe-img-slider").html(html);
    }

    function renderMealDetails(recipe) {
        if (!recipe) return;
        let html = "<h1>No data</h1>"
        if (recipe === null) {
            $("#meal-details").html(html);
            return;
        }

        html = `<span>${recipe.posted_at}</span>
                <h2>${recipe.name}</h2>
                <div class="receipe-duration">
                    <h6>Prep: ${recipe.preparation_time} mins</h6>
                    <h6>Yields: ${recipe.servings} Servings</h6>
                </div>`;

        $("#meal-details").html(html);
    }

    function renderRating(rating) {
        if (!rating) return;
        let html = "<h1>No data</h1>"
        if (rating === null) {
            $("#rating").html(html);
            return;
        };

        html = "";
        for (let i = 0; i < rating; i++) {
            html += `<i class="fa fa-star" aria-hidden="true"></i>`
        }

        $("#rating").html(html);
    }

    function renderSteps(steps) {
        if (!steps) return;
        let html = "<h1>No data</h1>"
        if (steps === null) {
            $("#steps").html(html);
            return;
        };

        html = "";
        for (let i = 0; i < steps.length; i++) {
            html += `
            <div class="single-preparation-step d-flex">
                <h4>${steps[i].step_id}.</h4>
                <p>${steps[i].description}</p>
            </div>`
        }

        $("#steps").html(html);
    }

    function renderIngredients(ing) {
        if (!ing) return;
        let html = "<h1>No data</h1>"
        if (ing === null) {
            $("#ing").html(html);
            return;
        };

        html = "<h4>Ingredients</h4>";
        for (let i = 0; i < ing.length; i++) {
            html += `  <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="${ing[i].ingredient_id}">
                            <label class="custom-control-label" for="${ing[i].ingredient_id}">${ing[i].ingName} </label>
                        </div>`
        }

        $("#ing").html(html);
    }

});