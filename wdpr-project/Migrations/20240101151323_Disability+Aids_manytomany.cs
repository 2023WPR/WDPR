using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr_project.Migrations
{
    public partial class DisabilityAids_manytomany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Disabilities_Experts_ExpertId",
                table: "Disabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_DisabilityAids_Experts_ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropIndex(
                name: "IX_DisabilityAids_ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropIndex(
                name: "IX_Disabilities_ExpertId",
                table: "Disabilities");

            migrationBuilder.DropColumn(
                name: "ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropColumn(
                name: "ExpertId",
                table: "Disabilities");

            migrationBuilder.CreateTable(
                name: "DisabilityAidExpert",
                columns: table => new
                {
                    AidUsersId = table.Column<int>(type: "int", nullable: false),
                    AidsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisabilityAidExpert", x => new { x.AidUsersId, x.AidsId });
                    table.ForeignKey(
                        name: "FK_DisabilityAidExpert_DisabilityAids_AidsId",
                        column: x => x.AidsId,
                        principalTable: "DisabilityAids",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DisabilityAidExpert_Experts_AidUsersId",
                        column: x => x.AidUsersId,
                        principalTable: "Experts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DisabilityExpert",
                columns: table => new
                {
                    DisabilitiesId = table.Column<int>(type: "int", nullable: false),
                    DisabledExpertsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisabilityExpert", x => new { x.DisabilitiesId, x.DisabledExpertsId });
                    table.ForeignKey(
                        name: "FK_DisabilityExpert_Disabilities_DisabilitiesId",
                        column: x => x.DisabilitiesId,
                        principalTable: "Disabilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DisabilityExpert_Experts_DisabledExpertsId",
                        column: x => x.DisabledExpertsId,
                        principalTable: "Experts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DisabilityAidExpert_AidsId",
                table: "DisabilityAidExpert",
                column: "AidsId");

            migrationBuilder.CreateIndex(
                name: "IX_DisabilityExpert_DisabledExpertsId",
                table: "DisabilityExpert",
                column: "DisabledExpertsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DisabilityAidExpert");

            migrationBuilder.DropTable(
                name: "DisabilityExpert");

            migrationBuilder.AddColumn<int>(
                name: "ExpertId",
                table: "DisabilityAids",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ExpertId",
                table: "Disabilities",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DisabilityAids_ExpertId",
                table: "DisabilityAids",
                column: "ExpertId");

            migrationBuilder.CreateIndex(
                name: "IX_Disabilities_ExpertId",
                table: "Disabilities",
                column: "ExpertId");

            migrationBuilder.AddForeignKey(
                name: "FK_Disabilities_Experts_ExpertId",
                table: "Disabilities",
                column: "ExpertId",
                principalTable: "Experts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DisabilityAids_Experts_ExpertId",
                table: "DisabilityAids",
                column: "ExpertId",
                principalTable: "Experts",
                principalColumn: "Id");
        }
    }
}
