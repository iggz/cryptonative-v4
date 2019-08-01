const db = require('./conn');

class Portfolio {
    constructor(portfolio_id, name, user_id) {
        this.portfolio_id = portfolio_id;
        this.name = name;
        this.user_id = user_id;
    }

    static async addPortfolio(name, user_id) {
        const id = await Portfolio.getMaxPortfolioId() + 1;
        const query = `INSERT INTO portfolios
                (
                    portfolio_id, 
                    name,
                    user_id
                ) VALUES (
                    ${id},
                    '${name}',
                    ${user_id}
                )`;

        try {
            await db.none(query);
            console.log(`Portfolio: ${name} added successfully.`);
        } catch (error) {
            console.log("addPortfolio() error:", error.message);
            return error.message;
        }
    }

    static async deletePortfolio(name, user_id) {
        const portfolio_id = await Portfolio.getPortfolioIdByNameAndUserId(name, user_id);
        const query = `DELETE FROM portfolios WHERE portfolio_id = ${portfolio_id}`;
        try {
            await db.none(query);
            console.log(`Portfolio: ${portfolio_id} deleted successfully.`);
        } catch (error) {
            console.log("deletePortfolio() error:", error.message);
            return error.message;
        }
    }

    static async getPortfolioIdByNameAndUserId(name, user_id) {
        const query = `
            SELECT 
                portfolio_id
            FROM
                portfolios
            WHERE
                name = '${name}'
            AND
                user_id = ${user_id}
        `;
        try {
            const response = await db.one(query);
            return response.portfolio_id;
        } catch (error) {
            console.log("getPortfolioIdByNameAndUserId() error:", error.message);
            return error.message;
        }
    }

    static async getMaxPortfolioId() {
        const query = `SELECT max(portfolio_id) FROM portfolios`;
        try {
            const response = await db.one(query);
            return response.max;
        } catch (error) {
            console.log("getMaxPortfolioId() error:", error.message);
            return error.message;
        }
    }
}

module.exports = Portfolio;