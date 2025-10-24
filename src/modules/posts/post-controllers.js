export function getPosts(req, res) {
    res.status(200).json({
        success: true,
        message: 'Welcome to Posts API!',
        data: {},
        error: null
    });
}

export function getPost(req, res) {
    res.status(200).json({
        success: true,
        message: 'post api located successfully.',
        data: {},
        error: null
    });
}

export function createPost(req, res) {
    res.status(201).json({
        success: true,
        message: 'API post created successfully.',
        data: {},
        error: null
    });
}

export function updatePost(req, res) {
    res.status(200).json({
        success: true,
        message: 'API post updated successfully.',
        data: {},
        error: null
    })
}

export function deletePost(req, res) {
    res.status(204)
}