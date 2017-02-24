module ApplicationHelper
  def datetime(datetime)
    datetime.strftime('%Y年%m月%d日 %H点%M分') if datetime
  end
end
