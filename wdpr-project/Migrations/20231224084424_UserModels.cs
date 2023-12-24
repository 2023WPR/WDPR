using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr_project.Migrations
{
    public partial class UserModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AddressId",
                table: "PersonalData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "PersonalData",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Emailaddress",
                table: "PersonalData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Firstname",
                table: "PersonalData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "PersonalData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Middlenames",
                table: "PersonalData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Phonenumber",
                table: "PersonalData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "CaretakerId",
                table: "Experts",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "ContactByPhone",
                table: "Experts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ContactByThirdParty",
                table: "Experts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "PersonalDataId",
                table: "Experts",
                type: "int",
                nullable: false,
                defaultValue: 0);

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
                name: "IX_PersonalData_AddressId",
                table: "PersonalData",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_Experts_CaretakerId",
                table: "Experts",
                column: "CaretakerId");

            migrationBuilder.CreateIndex(
                name: "IX_Experts_PersonalDataId",
                table: "Experts",
                column: "PersonalDataId");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Experts_PersonalData_CaretakerId",
                table: "Experts",
                column: "CaretakerId",
                principalTable: "PersonalData",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Experts_PersonalData_PersonalDataId",
                table: "Experts",
                column: "PersonalDataId",
                principalTable: "PersonalData",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonalData_Addresses_AddressId",
                table: "PersonalData",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Disabilities_Experts_ExpertId",
                table: "Disabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_DisabilityAids_Experts_ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropForeignKey(
                name: "FK_Experts_PersonalData_CaretakerId",
                table: "Experts");

            migrationBuilder.DropForeignKey(
                name: "FK_Experts_PersonalData_PersonalDataId",
                table: "Experts");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonalData_Addresses_AddressId",
                table: "PersonalData");

            migrationBuilder.DropIndex(
                name: "IX_PersonalData_AddressId",
                table: "PersonalData");

            migrationBuilder.DropIndex(
                name: "IX_Experts_CaretakerId",
                table: "Experts");

            migrationBuilder.DropIndex(
                name: "IX_Experts_PersonalDataId",
                table: "Experts");

            migrationBuilder.DropIndex(
                name: "IX_DisabilityAids_ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropIndex(
                name: "IX_Disabilities_ExpertId",
                table: "Disabilities");

            migrationBuilder.DropColumn(
                name: "AddressId",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Age",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Emailaddress",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Firstname",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Middlenames",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "Phonenumber",
                table: "PersonalData");

            migrationBuilder.DropColumn(
                name: "CaretakerId",
                table: "Experts");

            migrationBuilder.DropColumn(
                name: "ContactByPhone",
                table: "Experts");

            migrationBuilder.DropColumn(
                name: "ContactByThirdParty",
                table: "Experts");

            migrationBuilder.DropColumn(
                name: "PersonalDataId",
                table: "Experts");

            migrationBuilder.DropColumn(
                name: "ExpertId",
                table: "DisabilityAids");

            migrationBuilder.DropColumn(
                name: "ExpertId",
                table: "Disabilities");
        }
    }
}
