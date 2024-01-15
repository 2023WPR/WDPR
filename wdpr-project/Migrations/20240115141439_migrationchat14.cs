using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr_project.Migrations
{
    public partial class migrationchat14 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Businesses_Address_AddressId",
                table: "Businesses");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonalData_Address_AddressId",
                table: "PersonalData");

            migrationBuilder.DropForeignKey(
                name: "FK_ResearchCriteria_Address_AddressId",
                table: "ResearchCriteria");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_Address_TempId",
                table: "Address");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_Address_TempId1",
                table: "Address");

            migrationBuilder.DropUniqueConstraint(
                name: "AK_Address_TempId2",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "TempId",
                table: "Address");

            migrationBuilder.RenameTable(
                name: "Address",
                newName: "Addresses");

            migrationBuilder.RenameColumn(
                name: "TempId2",
                table: "Addresses",
                newName: "HouseNumber");

            migrationBuilder.RenameColumn(
                name: "TempId1",
                table: "Addresses",
                newName: "Id");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Addresses",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "Addition",
                table: "Addresses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Postcode",
                table: "Addresses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Addresses",
                table: "Addresses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Businesses_Addresses_AddressId",
                table: "Businesses",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonalData_Addresses_AddressId",
                table: "PersonalData",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ResearchCriteria_Addresses_AddressId",
                table: "ResearchCriteria",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Businesses_Addresses_AddressId",
                table: "Businesses");

            migrationBuilder.DropForeignKey(
                name: "FK_PersonalData_Addresses_AddressId",
                table: "PersonalData");

            migrationBuilder.DropForeignKey(
                name: "FK_ResearchCriteria_Addresses_AddressId",
                table: "ResearchCriteria");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Addresses",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "Addition",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "Postcode",
                table: "Addresses");

            migrationBuilder.RenameTable(
                name: "Addresses",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "HouseNumber",
                table: "Address",
                newName: "TempId2");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Address",
                newName: "TempId1");

            migrationBuilder.AlterColumn<int>(
                name: "TempId1",
                table: "Address",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "TempId",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddUniqueConstraint(
                name: "AK_Address_TempId",
                table: "Address",
                column: "TempId");

            migrationBuilder.AddUniqueConstraint(
                name: "AK_Address_TempId1",
                table: "Address",
                column: "TempId1");

            migrationBuilder.AddUniqueConstraint(
                name: "AK_Address_TempId2",
                table: "Address",
                column: "TempId2");

            migrationBuilder.AddForeignKey(
                name: "FK_Businesses_Address_AddressId",
                table: "Businesses",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "TempId2",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PersonalData_Address_AddressId",
                table: "PersonalData",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "TempId1",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ResearchCriteria_Address_AddressId",
                table: "ResearchCriteria",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "TempId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
