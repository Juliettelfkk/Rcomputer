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
    <title>Categories</title>
</head>

<body>
    <div class="row  h-100">
        <div class="col-2 bg-danger-subtle text-center shadow sidebar-color">
            @include('sidebar.sidebar')
        </div>
        <div class="col-10 continaer image">
            <div class="row mt-3">
                <div class="col text-start">
                    <h1 class="display-3 fw-bold text-dark">Categories</h1>
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
                <div class="bg-image">
                    <div class="mask d-flex align-items-center">
                        <div class="container">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body p-0">
                                        <table class="table table-striped mb-0 text-center shadow">
                                            <thead style="background-color: #002d72;">
                                                <tr>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mahher borads</td>
                                                    <td>used to build setup pc's</td>
                                                    <td>
                                                        <button class="btn btn-warning"><i
                                                                class="bi bi-pencil-square"></i></button>
                                                        <button class="btn btn-danger"><i
                                                                class="bi bi-trash-fill"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Mouse</td>
                                                    <td>most fast and speed moving mouses</td>
                                                    <td>
                                                        <button class="btn btn-warning"><i
                                                                class="bi bi-pencil-square"></i></button>
                                                        <button class="btn btn-danger"><i
                                                                class="bi bi-trash-fill"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>keyBoards</td>
                                                    <td>best perfermance ever to comenicate with pc</td>
                                                    <td>
                                                        <button class="btn btn-warning"><i
                                                                class="bi bi-pencil-square"></i></button>
                                                        <button class="btn btn-danger"><i
                                                                class="bi bi-trash-fill"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
