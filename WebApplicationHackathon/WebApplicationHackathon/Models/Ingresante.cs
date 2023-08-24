using System;
using System.Collections.Generic;

namespace WebApplicationHackathon.Models;

public partial class Ingresante
{
    public int IdIngresante { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public string? Dni { get; set; }

    public string? Github { get; set; }

    public bool? ExperienciaIt { get; set; }

    public int? AniosExperiencia { get; set; }

    public int? ExperienciaLaboralNoIt { get; set; }
}
