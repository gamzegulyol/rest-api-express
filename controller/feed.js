exports.getPosts = (req, res, next) =>{
    res.status(200).json({
        posts:[{
            title:'first post',
            content: 'this is the firs post!'
        }]
    });
}

exports.createPosts = (req, res, next)=>{
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message : 'post create successfully!',
        posts: {title:title, content:content}

    });



}