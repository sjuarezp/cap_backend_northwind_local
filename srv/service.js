

  module.exports = srv => {

    async function getNextId(entity) {
      const result = await SELECT.one(entity).orderBy({ id: 'desc' })
      return result ? result.id + 1 : 1
    }
  
    srv.before('CREATE', 'Categories', async context => {
      context.data.id = context.data.id || await getNextId("Category")
    });
    srv.before('CREATE', 'Products', async context => {
      context.data.id = context.data.id || await getNextId("Product")
    });
}