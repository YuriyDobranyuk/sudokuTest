using System;
using System.Xml.Linq;

namespace ChangeColorsHedgehogs
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("MinStepsToChangeColor.");
            
            for (var i = 0; i < 3; i++)
            {
                int[] population = new int[3];
                
                switch (i)
                {
                    case 0:
                        population = new int[3] { 8, 1, 9 };
                        break;
                    case 1:
                        population = new int[3] { 2, 4, 7 };
                        break;
                    case 2:
                        population = new int[3] { 2009, 2012, 2000 };
                        break;
                }
                for (var j = 0; j < 3; j++)
                {
                    int steps;
                    steps = MinStepsToChangeColor(population, j);
                    Console.WriteLine($"[{population[0]}, {population[1]}, {population[2]}]");
                    Console.WriteLine($"Target \"{j}\" color state can be reached in \"{steps}\" steps.");
                    Console.WriteLine();
                }                
            }
            Console.ReadKey();
        }

        public static int MinStepsToChangeColor(int[] population, int targetColor)
        {
            int steps = 0;
            var modPopulation = new int[3];
            var populationOtherColor = new int[2];

            for (var i = 0; i < population.Length; i++)
            {
                var mod3 = population[i] % 3;
                modPopulation[i] = mod3;
            }

            int indexFirstOtherColor = (targetColor + 1) % 3;
            int indexSecoundOtherColor = (targetColor + 2) % 3;

            populationOtherColor = new [] { population[indexFirstOtherColor], population[indexSecoundOtherColor] };

            if (modPopulation[indexFirstOtherColor] == modPopulation[indexSecoundOtherColor])
            {
                steps = populationOtherColor.Max();
            }
            else
            {
                steps = -1;
            }
            return steps;
        }

    }
}