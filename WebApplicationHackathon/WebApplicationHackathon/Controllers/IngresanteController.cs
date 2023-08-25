using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplicationHackathon.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Diagnostics.Metrics;

namespace WebApplicationHackathon.Controllers
{
    public class IngresanteController : Controller
    {
        private readonly DbdicsysContext _DBContext;

        public IngresanteController(DbdicsysContext context)
        {
            _DBContext = context;
        }


        public IActionResult Index(int? selectedAge, string selectedCountry, bool? younger, bool? older, int? selectedExperience)
        {
            List<Ingresante> _ingresante = _DBContext.Ingresantes.ToList();
            var filteredPeople = _ingresante;

            if (selectedAge.HasValue)
            {
                if (younger == true)
                {
                    filteredPeople = filteredPeople.Where(ingresante => ingresante.Edad > selectedAge.Value).ToList();
                }
                else if (older == true)
                {
                    filteredPeople = filteredPeople.Where(ingresante => ingresante.Edad < selectedAge.Value).ToList();
                }
                else
                {
                    filteredPeople = filteredPeople.Where(ingresante => ingresante.Edad == selectedAge.Value).ToList();

                }
            }

            if (!string.IsNullOrEmpty(selectedCountry))
            {
                filteredPeople = filteredPeople.Where(ingresante => ingresante.Nacionalidad == selectedCountry).ToList();
            }

          

            if (selectedExperience.HasValue)
            {
                filteredPeople = filteredPeople.Where(ingresante => ingresante.AniosExperiencia > selectedExperience.Value).ToList();
            }

            return View(filteredPeople);
        }

        [HttpGet]
        public IActionResult Ingresante_Registro()
        {
           
            return View();
        }

        [HttpPost]
        public IActionResult Ingresante_Registro(Ingresante ingresante)
        {
            _DBContext.Ingresantes.Add(ingresante);
            _DBContext.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}