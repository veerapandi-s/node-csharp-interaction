using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Class1
    {
        public async Task<object> Subtract(dynamic input)
        {
            int num1 = (int)input.num1;
            int num2 = (int)input.num2;
            return num1 - num2;
        }
    }
}
