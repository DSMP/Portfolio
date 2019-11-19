using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DsmpPortfolio.Repositories
{
    public interface IProjectRepository
    {
        List<string> GetAllProjects();
    }
}
