const usuarioGet = (req, res) => {
    res.status(200).json({
        msg: 'Hola'
    });
};

module.exports = { usuarioGet };