const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   const token = req.header('Authorization').replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Access denied.' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'secretKey');
//     console.log('Decoded Token:', decoded);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error('Token Error:', err);
//     res.status(400).json({ success: false, message: 'Invalid token.' });
//   }
// };

module.exports = function(req, res, next) {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log('Received Token:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token Error:', err);
    res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};
