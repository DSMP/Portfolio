using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DsmpPortfolio.Models.Entities
{
    public class ProjectEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public void SetImage(byte[] imageSrc)
        {
            Image = @"data:image / jpeg; base64," + Convert.ToBase64String(imageSrc);
        }
    }
}
