const error = (req, res) => {

    res.status(404).json({
        Error: "Error 404, page not found"
    })
    
    }
    
    module.exports = {
    
        error
    }