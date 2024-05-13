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
    <link rel="stylesheet" href="/css/background.css">
    <title>dashboard</title>
</head>

<body>
    <div class="row h-100">
        <div class="col-2 bg-danger-subtle text-center shadow sidebar-color">
            @include('sidebar.sidebar')
        </div>
        <div class="col-10 continaer image">
            <div class="row  mt-3">
                <div class="col text-start">
                    <h1 class="display-3 fw-bold text-dark">Dashboard</h1>
                </div>
                <div class="col text-center m-auto mt-4">
                    <form class="d-flex">
                        <input class="form-control me-2 shadow" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success fw-bold shadow" type="submit">Search</button>
                    </form>
                </div>
                <div class="col my-auto text-end">
                    <button class="btn btn-success fw-bold me-5 p-2 px-3 shadow"><i class="bi bi-person-fill me-2"></i>Log in</button>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row mt-5">
                    <div class="col px-5 py-3 m-2 bg-light border-5 border-start border-danger shadow rounded-5">
                        <div class="d-block">
                            <div>
                                <h3 class="display-5 text-danger">Products</h3>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="fw-bold text-dark">15</h4>
                                </div>
                                <div class="col text-end m-auto">
                                    <i class="bi bi-dropbox" style="font-size: 1.5rem; color: rgb(0, 0, 0);"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-5 py-3 m-2 bg-light border-5 border-start border-info shadow rounded-5">
                        <div class="d-block">
                            <div>
                                <h3 class="display-5 text-info">Brands</h3>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="fw-bold text-dark">30</h4>
                                </div>
                                <div class="col text-end m-auto">
                                    <i class="bi bi-award-fill" style="font-size: 1.5rem; color: rgb(0, 0, 0);"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-5 py-3 m-2 bg-light border-5 border-start border-warning shadow rounded-5">
                        <div class="d-block">
                            <div>
                                <h3 class="display-5 text-warning">Categories</h3>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="fw-bold text-dark">24</h4>
                                </div>
                                <div class="col text-end m-auto">
                                    <i class="bi bi-bookmark-check-fill" style="font-size: 1.5rem; color: rgb(0, 0, 0);"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-5 py-3 m-2 bg-light border-5 border-start border-success shadow rounded-5">
                        <div class="d-block">
                            <div>
                                <h3 class="display-5 text-success">Orders</h3>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="fw-bold text-dark">50</h4>
                                </div>
                                <div class="col text-end m-auto">
                                    <i class="bi bi-person-lines-fill" style="font-size: 1.5rem; color: rgb(0, 0, 0);"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
