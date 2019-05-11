const isDev = process.env.NODE_ENV === 'development'

const config = {
  database: 'blogdev'  ,
  user: 'root' ,
  password:  'LZX1992-:=' ,
  options: {
    host: "58.87.92.197",
    dialect: 'mysql', // 连接到 mysql
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false, // 默认不加时间戳
      freezeTableName: true // 表名默认不加 s
    },
    timezone: '+08:00'
  }
}

module.exports = config
