﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using wdpr_project.Data;
using wdpr_project.Models;

namespace wdpr_project.Controllers
{
    public class WeatherForecastsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public WeatherForecastsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: WeatherForecasts
        public async Task<IActionResult> Index()
        {
              return _context.WeatherForecasts != null ? 
                          View(await _context.WeatherForecasts.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.WeatherForecasts'  is null.");
        }

        // GET: WeatherForecasts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.WeatherForecasts == null)
            {
                return NotFound();
            }

            var weatherForecast = await _context.WeatherForecasts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (weatherForecast == null)
            {
                return NotFound();
            }

            return View(weatherForecast);
        }

        // GET: WeatherForecasts/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: WeatherForecasts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TemperatureC")] WeatherForecast weatherForecast)
        {
            if (ModelState.IsValid)
            {
                _context.Add(weatherForecast);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(weatherForecast);
        }

        // GET: WeatherForecasts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.WeatherForecasts == null)
            {
                return NotFound();
            }

            var weatherForecast = await _context.WeatherForecasts.FindAsync(id);
            if (weatherForecast == null)
            {
                return NotFound();
            }
            return View(weatherForecast);
        }

        // POST: WeatherForecasts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TemperatureC")] WeatherForecast weatherForecast)
        {
            if (id != weatherForecast.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(weatherForecast);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!WeatherForecastExists(weatherForecast.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(weatherForecast);
        }

        // GET: WeatherForecasts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.WeatherForecasts == null)
            {
                return NotFound();
            }

            var weatherForecast = await _context.WeatherForecasts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (weatherForecast == null)
            {
                return NotFound();
            }

            return View(weatherForecast);
        }

        // POST: WeatherForecasts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.WeatherForecasts == null)
            {
                return Problem("Entity set 'ApplicationDbContext.WeatherForecasts'  is null.");
            }
            var weatherForecast = await _context.WeatherForecasts.FindAsync(id);
            if (weatherForecast != null)
            {
                _context.WeatherForecasts.Remove(weatherForecast);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool WeatherForecastExists(int id)
        {
          return (_context.WeatherForecasts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}