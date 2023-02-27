using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class employeesController : Controller
    {
        private readonly empDbContext _empDbContext;
        public employeesController(empDbContext empDbContext)
        {
            _empDbContext = empDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees= await _empDbContext.employees.ToListAsync();
            return Ok(employees);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody]employee employeeRequest)
        {
            employeeRequest.Id = employeeRequest.Id;
            await _empDbContext.employees.AddAsync(employeeRequest);
            await _empDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetEmployee([FromRoute] int id)
        {
            var employee = await _empDbContext.employees.FirstOrDefaultAsync(x => x.Id==id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);

           
        }
        [HttpPut]
        [Route("{id:int}")]

        public async Task<IActionResult> UpdateEmployee([FromRoute] int id, employee updateEmployeeRequest)
        {
           var emp = await _empDbContext.employees.FindAsync(id);
            if (emp == null)
            {
                return NotFound();

            }
            
            emp.Name=updateEmployeeRequest.Name;
            emp.Email=updateEmployeeRequest.Email;
            emp.Phone=updateEmployeeRequest.Phone;  
            emp.Designation=updateEmployeeRequest.Designation;
            emp.Salary = updateEmployeeRequest.Salary;

            await _empDbContext.SaveChangesAsync();
            return Ok(emp);

        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            var emp = await _empDbContext.employees.FindAsync(id);
            if (emp == null)
            {
                return NotFound();

            }
            _empDbContext.employees.Remove(emp);
            await _empDbContext.SaveChangesAsync();

            return Ok(emp);
        }

    }
}
