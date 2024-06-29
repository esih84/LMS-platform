import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "computer Science" },
        { name: "music" },
        { name: "fitness" },
        { name: "photography" },
        { name: "actor" },
      ],
    });
    console.log("success");
  } catch (error) {
    console.log("Error Seeding the databse categories:", error);
  } finally {
    await database.$disconnect();
  }
}

main();
