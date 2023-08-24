using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplicationHackathon.Models;

public partial class DbdicsysContext : DbContext
{
    public DbdicsysContext()
    {
    }

    public DbdicsysContext(DbContextOptions<DbdicsysContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ingresante> Ingresantes { get; set; }

    public virtual DbSet<Rol> Rols { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local); Database=DBDICSYS; Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ingresante>(entity =>
        {
            entity.HasKey(e => e.IdIngresante).HasName("PK__Ingresan__293BBB9D3F7D785B");

            entity.HasIndex(e => e.Correo, "UQ__Ingresan__2A586E0B8CCB0CA1").IsUnique();

            entity.HasIndex(e => e.Dni, "UQ__Ingresan__D87608A71EDAC755").IsUnique();

            entity.Property(e => e.IdIngresante)
                .ValueGeneratedNever()
                .HasColumnName("id_ingresante");
            entity.Property(e => e.AniosExperiencia).HasColumnName("anios_experiencia");
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Dni)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("dni");
            entity.Property(e => e.ExperienciaIt).HasColumnName("experiencia_it");
            entity.Property(e => e.ExperienciaLaboralNoIt).HasColumnName("experiencia_laboral_no_it");
            entity.Property(e => e.Github)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("github");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Rol>(entity =>
        {
            entity.HasKey(e => e.IdRol).HasName("PK__Rol__6ABCB5E08718321A");

            entity.ToTable("Rol");

            entity.Property(e => e.IdRol)
                .ValueGeneratedNever()
                .HasColumnName("id_rol");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__4E3E04ADEFDC5E44");

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario)
                .ValueGeneratedNever()
                .HasColumnName("id_usuario");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("contrasena");
            entity.Property(e => e.Dni)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("dni");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
