﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using study_cards_api.Data;
using study_cards_api.Models;
using Newtonsoft.Json;

namespace study_cards_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StackController : ControllerBase
    {
        private ApplicationDbContext _context;
        public StackController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public string Get(int id)
        {
            var stack = _context.Stacks.Where(s => s.Id == id)
                .Select(s => new { 
                    id = s.Id, 
                    title = s.Title, 
                    cards = _context.Cards.Where(c => c.StackId == s.Id)
                    .Select(c => new { id = c.Id, word = c.Word, definition = c.Definition })
                .ToArray() });
            string response = JsonConvert.SerializeObject(stack);
            return response;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Stack stack)
        {
            _context.Stacks.Add(stack);
            _context.SaveChanges();
            return Created("URI of the created entity", stack);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Stack stack)
        {
            Stack dbStack = _context.Stacks.Find(stack.Id);
            if (dbStack == null)
                return BadRequest();
            dbStack.Title = stack.Title;
            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Stack dbStack = _context.Stacks.Find(id);
            if (dbStack == null)
                return BadRequest();
            _context.Stacks.Remove(dbStack);
            _context.SaveChanges();
            return Ok();
        }
    }
}