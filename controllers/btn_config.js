exports.getButtonConfig = (req, res, next) => {
    data = {
        buttons: [
            {
                id: 1,
                name: 'saiba_mais',
                options: 'something',
            },
            {
                id: 2,
                name: 'botao_play',
                options: 'something',
            },
            {
                id: 3,
                name: 'ficha_tecnica',
                options: 'something',
            },
        ],
    };
    res.status(200).json(data);
};
