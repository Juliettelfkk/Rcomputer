<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Add brand</title>
</head>
<body>
    <div class="container h-100">
        <div class="row">
            <div class="col text-start">
                <h1 class="display-3 fw-bold text-dark">Add Brand</h1>
            </div>
            <div class="col text-end my-auto">
                <a href="{{ route('brands') }}">
                    <button class="btn btn-danger fw-bold shadow"><i
                            class="bi bi-x-square-fill me-2"></i></i>Cancel</button>
                </a>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <form action="" method="post">
                <div class="row">
                    <div class="col">
                        <input class="form-control form-control-lg my-2 shadow" type="text" name="name"
                            placeholder="Name">
                    </div>
                </div>

                <div class="row ">
                    <div class="col">
                        <textarea class="form-control form-control-lg my-2 shadow" name="discription" cols="40" rows="3"
                            placeholder="Description"></textarea>
                    </div>
                </div>

                <div class="row ">
                    <div class="col text-end">
                        <button class="btn btn-success hover text-light fw- my-2  shadow" type="submit"><i
                                class="bi bi-save-fill me-2"></i>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
