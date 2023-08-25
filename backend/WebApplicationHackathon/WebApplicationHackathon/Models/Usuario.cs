using System;
using System.Collections.Generic;

namespace WebApplicationHackathon.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string? Nombre { get; set; }

    public string? Dni { get; set; }

    public string? Contrasena { get; set; }
}
