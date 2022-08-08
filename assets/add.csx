using System.Threading.Tasks;

public class Startup
{
    public async Task<object> Invoke(dynamic input)
    {
        int num1 = (int)input.num1;
        int num2 = (int)input.num2;
        return num1 + num2;
    }
}
