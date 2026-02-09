const datos = {
  cocinas: [
    { nombre: 'Italiana', descripcion: 'Cocina italiana', icono: '🇮🇹' },
    { nombre: 'Francesa', descripcion: 'Cocina francesa', icono: '🇫🇷' },
    { nombre: 'Española', descripcion: 'Cocina española', icono: '🇪🇸' },
    { nombre: 'Mexicana', descripcion: 'Cocina mexicana', icono: '🇲🇽' },
    { nombre: 'Tailandesa', descripcion: 'Cocina tailandesa', icono: '🇹🇭' },
    { nombre: 'Japonesa', descripcion: 'Cocina japonesa', icono: '🇯🇵' },
    { nombre: 'China', descripcion: 'Cocina china', icono: '🇨🇳' },
    { nombre: 'India', descripcion: 'Cocina india', icono: '🇮🇳' },
    { nombre: 'Griega', descripcion: 'Cocina griega', icono: '🇬🇷' },
    { nombre: 'Turca', descripcion: 'Cocina turca', icono: '🇹🇷' },
    { nombre: 'Portuguesa', descripcion: 'Cocina portuguesa', icono: '🇵🇹' },
    { nombre: 'Alemana', descripcion: 'Cocina alemana', icono: '🇩🇪' },
    { nombre: 'Brasileña', descripcion: 'Cocina brasileña', icono: '🇧🇷' },
    { nombre: 'Peruana', descripcion: 'Cocina peruana', icono: '🇵🇪' }
  ],
  platos: {
    'Italiana': [
      { nombre: 'Pasta Carbonara', imagen: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500' },
      { nombre: 'Risotto', imagen: 'https://images.unsplash.com/photo-1584872657773-a69e3f42a3da?w=500' },
      { nombre: 'Lasaña', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Ossobuco', imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc4ec?w=500' },
      { nombre: 'Panna Cotta', imagen: 'https://images.unsplash.com/photo-1609681865846-f5f1b8c0b098?w=500' },
      { nombre: 'Tiramisu', imagen: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500' },
      { nombre: 'Pizza Margherita', imagen: 'https://images.unsplash.com/photo-1604068549290-daea0aa67e5e?w=500' },
      { nombre: 'Ravioli', imagen: 'https://images.unsplash.com/photo-1646190588473-8c605a4ff5e8?w=500' },
      { nombre: 'Spaghetti Bolognese', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500' },
      { nombre: 'Gnocchi', imagen: 'https://images.unsplash.com/photo-1599042496201-e03c1e1e5b51?w=500' },
      { nombre: 'Linguine al Pesto', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500' },
      { nombre: 'Minestrone', imagen: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=500' },
      { nombre: 'Bruschetta', imagen: 'https://images.unsplash.com/photo-1610000267837-6f7f1e334b0a?w=500' },
      { nombre: 'Zabaglione', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' }
    ],
    'Francesa': [
      { nombre: 'Coq au Vin', imagen: 'https://images.unsplash.com/photo-1588195538326-c5b1e6f3e0e0?w=500' },
      { nombre: 'Beef Bourguignon', imagen: 'https://images.unsplash.com/photo-1620859267537-b85b6ec099ea?w=500' },
      { nombre: 'Sole Meunière', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Bouillabaisse', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Cassoulet', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Escargot', imagen: 'https://images.unsplash.com/photo-1568308439196-2c70f2d20f58?w=500' },
      { nombre: 'Crème Brûlée', imagen: 'https://images.unsplash.com/photo-1533134242 344?w=500' },
      { nombre: 'Macarons', imagen: 'https://images.unsplash.com/photo-1569718212e3-dae76e3e3843?w=500' },
      { nombre: 'Quiche Lorraine', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500' },
      { nombre: 'Boeuf Tartare', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Foie Gras', imagen: 'https://images.unsplash.com/photo-1568308439196-2c70f2d20f58?w=500' },
      { nombre: 'Soufflé', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Moussaka', imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc4ec?w=500' },
      { nombre: 'Pâté', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' }
    ],
    'Española': [
      { nombre: 'Paella Valenciana', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Gazpacho', imagen: 'https://images.unsplash.com/photo-1484723910556-3fbc3ecd992d?w=500' },
      { nombre: 'Tortilla Española', imagen: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500' },
      { nombre: 'Pulpo a la Gallega', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Croquetas', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Jamón Ibérico', imagen: 'https://images.unsplash.com/photo-1577099505137-6fbdf7c3fe01?w=500' },
      { nombre: 'Patatas Bravas', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Gambas al Ajillo', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=500' },
      { nombre: 'Rabo de Toro', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Espinacas con Garbanzos', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' },
      { nombre: 'Bacalao a la Vizcaína', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Flan', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Turrón', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Escalivada', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' }
    ],
    'Mexicana': [
      { nombre: 'Tacos al Pastor', imagen: 'https://images.unsplash.com/photo-1565871337648-670b0c3cb342?w=500' },
      { nombre: 'Chiles Rellenos', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Mole Poblano', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Quesadillas', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Ceviche', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Enchiladas', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Tamales', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Guacamole', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=500' },
      { nombre: 'Pozole', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Elote', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Tinga de Pollo', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Sopa de Tortilla', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Flan Mexicano', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Cochinita Pibil', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' }
    ],
    'Tailandesa': [
      { nombre: 'Pad Thai', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Tom Yum', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Curry Rojo', imagen: 'https://images.unsplash.com/photo-1565557623814-550d2c4ec217?w=500' },
      { nombre: 'Satay', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Green Curry', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Larb', imagen: 'https://images.unsplash.com/photo-1565557623814-550d2c4ec217?w=500' },
      { nombre: 'Som Tam', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' },
      { nombre: 'Bangkok Noodles', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Panang Curry', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Fish Cakes', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Khao Soi', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Mango Sticky Rice', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Massaman Curry', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Spring Rolls', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' }
    ],
    'Japonesa': [
      { nombre: 'Sushi', imagen: 'https://images.unsplash.com/photo-1579584425555-63967a0ac078?w=500' },
      { nombre: 'Ramen', imagen: 'https://images.unsplash.com/photo-1537344571063-5f4e09f1a3a0?w=500' },
      { nombre: 'Tempura', imagen: 'https://images.unsplash.com/photo-1553504539-1a7e1d41c93d?w=500' },
      { nome: 'Tonkatsu', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Oyakodon', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Miso Soup', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Yakitori', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Sukiyaki', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Shabu Shabu', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Okonomiyaki', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Udon', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Dorayaki', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Karaage', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Yakisoba', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' }
    ],
    'China': [
      { nombre: 'Pato a la Pekín', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Mapo Tofu', imagen: 'https://images.unsplash.com/photo-1565557623814-550d2c4ec217?w=500' },
      { nombre: 'Chow Mein', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Fried Rice', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Dumplings', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Hot Pot', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Kung Pao Chicken', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Sweet and Sour Pork', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Lo Mein', imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500' },
      { nombre: 'Wonton Soup', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Egg Roll', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Mo Gae Gai', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Spring Roll', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Chow Gau', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' }
    ],
    'India': [
      { nombre: 'Butter Chicken', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Tandoori Chicken', imagen: 'https://images.unsplash.com/photo-1597318972826-c0a3b1910c5e?w=500' },
      { nombre: 'Tikka Masala', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Biryani', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Samosas', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Naan', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Dosa', imagen: 'https://images.unsplash.com/photo-1568308439196-2c70f2d20f58?w=500' },
      { nombre: 'Chana Masala', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' },
      { nombre: 'Palak Paneer', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' },
      { nombre: 'Vindaloo', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Korma', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Gulab Jamun', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Raita', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=500' },
      { nombre: 'Panipuri', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' }
    ],
    'Griega': [
      { nombre: 'Moussaka', imagen: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc4ec?w=500' },
      { nombre: 'Souvlaki', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Tzatziki', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=500' },
      { nombre: 'Spanakopita', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500' },
      { nombre: 'Falafel', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Saganaki', imagen: 'https://images.unsplash.com/photo-1568308439196-2c70f2d20f58?w=500' },
      { nombre: 'Greek Salad', imagen: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500' },
      { nombre: 'Kebab', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Pastitsio', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Dolmades', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Gyro', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Halva', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Keftedes', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Loukoumades', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' }
    ],
    'Turca': [
      { nombre: 'Kebab', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Baklava', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Hummus', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=500' },
      { nombre: 'Meze', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Börek', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500' },
      { nombre: 'Pide', imagen: 'https://images.unsplash.com/photo-1599506781514-a6c7c13f0b14?w=500' },
      { nombre: 'Lahmacun', imagen: 'https://images.unsplash.com/photo-1599506781514-a6c7c13f0b14?w=500' },
      { nombre: 'Sos', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Tabbouleh', imagen: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500' },
      { nombre: 'Turkish Delight', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Mantı', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Şiş Köfte', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Mercimek Çorbası', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Turkish Coffee', imagen: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500' }
    ],
    'Portuguesa': [
      { nombre: 'Bacalao à Brás', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Francesinha', imagen: 'https://images.unsplash.com/photo-1568308439196-2c70f2d20f58?w=500' },
      { nombre: 'Caldo Verde', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Arroz de Marisco', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Pastéis de Nata', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Sardinas Asadas', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Cataplan', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Alheira', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Bitoque', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Ovos Moles', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Caldo de Peixe', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Pão de Queijo', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Açorda', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Pudim de Leite', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' }
    ],
    'Alemana': [
      { nombre: 'Schnitzel', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Bratwurst', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Pretzels', imagen: 'https://images.unsplash.com/photo-1618164436241-4473940571cd?w=500' },
      { nombre: 'Sauerbraten', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Schweinshaxe', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Spätzle', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500' },
      { nombre: 'Sauerkraut', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=500' },
      { nombre: 'Kartoffelpuffer', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Apfelstrudel', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Black Forest Cake', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Leberkäse', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Frikadellen', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Rouladen', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Kaiserschmarrn', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' }
    ],
    'Brasileña': [
      { nombre: 'Feijoada', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Pão de Queijo', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Ceviche', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Moqueca', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Brigadeiros', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Açaí Bowl', imagen: 'https://images.unsplash.com/photo-1590080876/food-image?w=500' },
      { nombre: 'Tapioca', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Coxinha', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Acarajé', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Bobo de Camarão', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Pudim de Leite Condensado', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Pastéis', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Camarão na Moranga', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Beijinhos', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' }
    ],
    'Peruana': [
      { nombre: 'Ceviche', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Lomo Saltado', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Ají de Gallina', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Papa a la Huancaína', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Causa', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Tiradito', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Rocoto Relleno', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
      { nombre: 'Anticuchos', imagen: 'https://images.unsplash.com/photo-1585238341710-4b4d60cfb298?w=500' },
      { nombre: 'Chupe de Camarones', imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500' },
      { nombre: 'Tamales Peruanos', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=500' },
      { nombre: 'Sopa de Res', imagen: 'https://images.unsplash.com/photo-1535536514519-7e5e3e0618b2?w=500' },
      { nombre: 'Mazamorra Morada', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Picarones', imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
      { nombre: 'Raya al Horno', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' }
    ]
  },
  ingredientes: {
    'Pasta Carbonara': [
      { nombre: 'Spaghetti', cantidad: '400g', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200' },
      { nombre: 'Huevos', cantidad: '3', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200' },
      { nombre: 'Panceta', cantidad: '200g', imagen: 'https://images.unsplash.com/photo-1577099505137-6fbdf7c3fe01?w=200' },
      { nombre: 'Queso Parmesano', cantidad: '100g', imagen: 'https://images.unsplash.com/photo-1452894906073-30c6450ec459?w=200' },
      { nombre: 'Sal', cantidad: 'Al gusto', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' },
      { nombre: 'Pimienta', cantidad: 'Al gusto', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' }
    ],
    'Coq au Vin': [
      { nombre: 'Pollo', cantidad: '1.5kg', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200' },
      { nombre: 'Vino Tinto', cantidad: '750ml', imagen: 'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=200' },
      { nombre: 'Champiñones', cantidad: '300g', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' },
      { nombre: 'Cebolla', cantidad: '2', imagen: 'https://images.unsplash.com/photo-1569718212e3-dae76e3e3843?w=200' },
      { nombre: 'Ajo', cantidad: '4 dientes', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' },
      { nombre: 'Baicon', cantidad: '150g', imagen: 'https://images.unsplash.com/photo-1577099505137-6fbdf7c3fe01?w=200' }
    ],
    'Paella Valenciana': [
      { nombre: 'Arroz', cantidad: '400g', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=200' },
      { nombre: 'Azafrán', cantidad: '1g', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' },
      { nombre: 'Pollo', cantidad: '800g', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200' },
      { nombre: 'Conejo', cantidad: '600g', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200' },
      { nombre: 'Judías verdes', cantidad: '200g', imagen: 'https://images.unsplash.com/photo-1609680143381-b77da9d7989d?w=200' },
      { nombre: 'Tomate', cantidad: '2', imagen: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=200' }
    ],
    'Tacos al Pastor': [
      { nombre: 'Cerdo', cantidad: '1kg', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200' },
      { nombre: 'Piña', cantidad: '1', imagen: 'https://images.unsplash.com/photo-1590589917220-3f5e1c48ba3a?w=200' },
      { nombre: 'Tortillas', cantidad: '20', imagen: 'https://images.unsplash.com/photo-1565957615233-9b9f68353d08?w=200' },
      { nombre: 'Cebolla', cantidad: '2', imagen: 'https://images.unsplash.com/photo-1569718212e3-dae76e3e3843?w=200' },
      { nombre: 'Cilantro', imagen: 'Fresco', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=200' },
      { nombre: 'Limón', cantidad: '3', imagen: 'https://images.unsplash.com/photo-1585701032534-67f2a8d0ef12?w=200' }
    ]
  },
  pasos: {
    'Pasta Carbonara': [
      { numero: 1, descripcion: 'Cocina la pasta en agua con sal', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300' },
      { numero: 2, descripcion: 'Corta la panceta en cubitos', imagen: 'https://images.unsplash.com/photo-1577099505137-6fbdf7c3fe01?w=300' },
      { numero: 3, descripcion: 'Fríe la panceta hasta que esté crujiente', imagen: 'https://images.unsplash.com/photo-1577099505137-6fbdf7c3fe01?w=300' },
      { numero: 4, descripcion: 'Bate los huevos con queso y pimienta', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=300' },
      { numero: 5, descripcion: 'Mezcla la pasta escurrida con la panceta caliente', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300' },
      { numero: 6, descripcion: 'Agrega la mezcla de huevos y mezcla rápidamente', imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300' }
    ],
    'Coq au Vin': [
      { numero: 1, descripcion: 'Dora el pollo en una sartén', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' },
      { numero: 2, descripcion: 'Agrega el vino tinto', imagen: 'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=300' },
      { numero: 3, descripcion: 'Añade champiñones y cebolla', imagen: 'https://images.unsplash.com/photo-1569718212e3-dae76e3e3843?w=300' },
      { numero: 4, descripcion: 'Cocina a fuego lento durante 1 hora', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' },
      { numero: 5, descripcion: 'Sazona con sal y pimienta', imagen: 'https://images.unsplash.com/photo-1599599810694-2202a9e79c89?w=300' },
      { numero: 6, descripcion: 'Sirve caliente', imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' }
    ],
    'Paella Valenciana': [
      { numero: 1, descripcion: 'Calienta aceite en una paellera', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
      { numero: 2, descripcion: 'Dora el pollo y el conejo', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
      { numero: 3, descripcion: 'Añade cebolla y tomate', imagen: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300' },
      { numero: 4, descripcion: 'Agrega el arroz', imagen: 'https://images.unsplash.com/photo-1599599810533-59c8bef0f7b7?w=300' },
      { numero: 5, descripcion: 'Vierte el caldo con azafrán', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
      { numero: 6, descripcion: 'Cocina a fuego fuerte 5 minutos, luego a fuego lento', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' }
    ],
    'Tacos al Pastor': [
      { numero: 1, descripcion: 'Marina el cerdo con especias', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
      { numero: 2, descripcion: 'Cocina el cerdo en una sartén o plancha', imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
      { numero: 3, descripcion: 'Calienta las tortillas', imagen: 'https://images.unsplash.com/photo-1565957615233-9b9f68353d08?w=300' },
      { numero: 4, descripcion: 'Pica la piña', imagen: 'https://images.unsplash.com/photo-1590589917220-3f5e1c48ba3a?w=300' },
      { numero: 5, descripcion: 'Coloca la carne en la tortilla', imagen: 'https://images.unsplash.com/photo-1565957615233-9b9f68353d08?w=300' },
      { numero: 6, descripcion: 'Agrega piña, cebolla y cilantro', imagen: 'https://images.unsplash.com/photo-1565957615233-9b9f68353d08?w=300' }
    ]
  }
};

function inicializarDatos(db) {
  // Insertar cocinas
  datos.cocinas.forEach(cocina => {
    db.run(
      'INSERT INTO cocinas (nombre, descripcion, icono) VALUES (?, ?, ?)',
      [cocina.nombre, cocina.descripcion, cocina.icono],
      function(err) {
        if (!err) {
          const cocinaId = this.lastID;

          // Insertar platos para esta cocina
          if (datos.platos[cocina.nombre]) {
            datos.platos[cocina.nombre].forEach(plato => {
              db.run(
                'INSERT INTO platos (nombre, cocina_id, imagen) VALUES (?, ?, ?)',
                [plato.nombre, cocinaId, plato.imagen],
                function(err) {
                  if (!err) {
                    const platoId = this.lastID;

                    // Insertar ingredientes
                    if (datos.ingredientes[plato.nombre]) {
                      datos.ingredientes[plato.nombre].forEach(ingrediente => {
                        db.run(
                          'INSERT INTO ingredientes (plato_id, nombre, cantidad, imagen) VALUES (?, ?, ?, ?)',
                          [platoId, ingrediente.nombre, ingrediente.cantidad, ingrediente.imagen]
                        );
                      });
                    }

                    // Insertar pasos de receta
                    if (datos.pasos[plato.nombre]) {
                      datos.pasos[plato.nombre].forEach(paso => {
                        db.run(
                          'INSERT INTO pasos_receta (plato_id, numero, descripcion, imagen) VALUES (?, ?, ?, ?)',
                          [platoId, paso.numero, paso.descripcion, paso.imagen]
                        );
                      });
                    }
                  }
                }
              );
            });
          }
        }
      }
    );
  });
}

module.exports = { inicializarDatos };
