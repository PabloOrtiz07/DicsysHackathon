using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplicationHackathon.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;


namespace WebApplicationHackathon.Controllers
{
    public class HomeController : Controller
    {
        private readonly DbdicsysContext _DBContext;

        public HomeController(DbdicsysContext context)
        {
            _DBContext = context;
        }

        public IActionResult Index()
        {
            List<Ingresante> listaIngresantes = _DBContext.Ingresantes.ToList();

            return View(listaIngresantes);
        }
    }
}