using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wdpr_project.Data;
using wdpr_project.Models;
using wdpr_project.Services;

namespace wdpr_project.Controllers_
{
    public class ResearchController : Controller
    {
        private readonly ApplicationDbContext _context;
<<<<<<< HEAD

        public ResearchController(ApplicationDbContext context)
        {
            _context = context;
=======
        private readonly IEmailService _emailService;

        public ResearchController(ApplicationDbContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
>>>>>>> origin/main
        }

        // GET: Research
        [HttpGet("Research")]
        public async Task<ActionResult<IEnumerable<Research>>> ListResearch()
        {
             if (_context.Researches == null)
          {
              return NotFound();
          }
            return await _context.Researches.ToListAsync();
        }

        [HttpGet("Research/Details/{id}")]
        public async Task<IActionResult> GetResearchDetails(int id)
        {
            var research = await _context.Researches
                .FirstOrDefaultAsync(m => m.Id == id);

            if (research == null)
            {
                return NotFound();
            }

            return Ok(research);
        }

        [HttpGet("Create-Research")]
        public IActionResult Create()
        {
            return Ok();
        }

        [HttpPost("Create-Research")]
<<<<<<< HEAD
        public async Task<ActionResult<ResearchDTO>> CreateResearch([FromBody] ResearchDTO researchdto)
        {  
            var research = new Research{
                Id = researchdto.Id,
                Title = researchdto.Title,
                Description = researchdto.Description,
                Reward = researchdto.Reward, 
                Capacity = researchdto.Capacity,
                Status = researchdto.Status,
                business = await _context.Businesses.FindAsync(researchdto.businessId),
                ResearchCriterium = await _context.ResearchCriteria.FindAsync(researchdto.ResearchCriteriumId)
            };
            _context.Researches.Add(research);
            await _context.SaveChangesAsync();

=======
        public async Task<ActionResult<Research>> CreateResearch([FromBody] Research research)
        {  
            _context.Researches.Add(research);
            await _context.SaveChangesAsync();

           if (research.ResearchCriterium != null)
            {
                await _emailService.SendEmailsToParticipants(research.ResearchCriterium.DisabilityId);
            }
>>>>>>> origin/main

            return CreatedAtAction("GetOnderzoek", new { id = research.Id }, research);
        }
                
        [HttpGet("Edit/{id}")]
        public async Task<IActionResult> GetResearchForEdit(int id)
        {
            var research = await _context.Researches.FindAsync(id);

            if (research == null)
            {
                return NotFound();
            }

            return Ok(research);
        }

        // POST: Research/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        public async Task<IActionResult> Edit(int id, [FromBody] Research research)
        {
            if (id != research.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(research);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ResearchExists(research.Id))
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
            return Ok(research);
        }

        // GET: Research/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Researches == null)
            {
                return NotFound();
            }

            var research = await _context.Researches
                .FirstOrDefaultAsync(m => m.Id == id);
            if (research == null)
            {
                return NotFound();
            }

            return Ok(research);
        }

        // POST: Research/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Researches == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Researches'  is null.");
            }
            var research = await _context.Researches.FindAsync(id);
            if (research != null)
            {
                _context.Researches.Remove(research);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ResearchExists(int id)
        {
          return (_context.Researches?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
