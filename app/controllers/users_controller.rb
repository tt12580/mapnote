class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :show, :update, :destroy]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "注册成功。"
      redirect_to root_url
    else
      flash[:danger] = "注册失败。"
      render :new
    end
  end

  def show

  end

  def edit

  end

  def update
    if @user.update_attributes(user_params)
      flash[:success] = "更新成功。"
      redirect_to root_url
    else
      flash[:danger] = "更新失败。"
      render :edit
    end
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
