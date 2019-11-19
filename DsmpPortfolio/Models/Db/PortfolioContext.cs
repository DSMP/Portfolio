using DsmpPortfolio.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DsmpPortfolio.Models.Db
{
    public class PortfolioContext : DbContext
    {
        public DbSet<ProjectEntity> ProjectEntity { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer("Server=DESKTOP-2ENJ0B3\\SQLEXPRESS;Database=DsmpPortfolio;Trusted_Connection=True;");
            }
        }
    }
}
