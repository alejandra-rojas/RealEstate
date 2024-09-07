using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webApi.Migrations
{
    /// <inheritdoc />
    public partial class FixShadow : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Agents_PropertyLiasonAgentAgentId",
                table: "Properties");

            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Buyers_BuyerId1",
                table: "Properties");

            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Sellers_SellerId1",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Properties_BuyerId1",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Properties_PropertyLiasonAgentAgentId",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Properties_SellerId1",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "BuyerId1",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PropertyLiasonAgentAgentId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "SellerId1",
                table: "Properties");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BuyerId1",
                table: "Properties",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PropertyLiasonAgentAgentId",
                table: "Properties",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SellerId1",
                table: "Properties",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Properties_BuyerId1",
                table: "Properties",
                column: "BuyerId1");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_PropertyLiasonAgentAgentId",
                table: "Properties",
                column: "PropertyLiasonAgentAgentId");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_SellerId1",
                table: "Properties",
                column: "SellerId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Agents_PropertyLiasonAgentAgentId",
                table: "Properties",
                column: "PropertyLiasonAgentAgentId",
                principalTable: "Agents",
                principalColumn: "AgentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Buyers_BuyerId1",
                table: "Properties",
                column: "BuyerId1",
                principalTable: "Buyers",
                principalColumn: "BuyerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Sellers_SellerId1",
                table: "Properties",
                column: "SellerId1",
                principalTable: "Sellers",
                principalColumn: "SellerId");
        }
    }
}
