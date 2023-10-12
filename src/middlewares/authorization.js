// Verifica si el usuario esta autenticado
export const authorization = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).send({
        error: "Unauthorized",
      });
    }
    next();
  };
};
