using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Buyers_BuyerId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PropertyId",
                table: "Sellers");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "PropertyId",
                table: "Buyers");

            migrationBuilder.AlterColumn<int>(
                name: "BuyerId",
                table: "Properties",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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
                name: "FK_Properties_Buyers_BuyerId",
                table: "Properties",
                column: "BuyerId",
                principalTable: "Buyers",
                principalColumn: "BuyerId");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Agents_PropertyLiasonAgentAgentId",
                table: "Properties");

            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Buyers_BuyerId",
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

            migrationBuilder.AddColumn<int>(
                name: "PropertyId",
                table: "Sellers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "BuyerId",
                table: "Properties",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Events",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "PropertyId",
                table: "Buyers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Buyers_BuyerId",
                table: "Properties",
                column: "BuyerId",
                principalTable: "Buyers",
                principalColumn: "BuyerId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
