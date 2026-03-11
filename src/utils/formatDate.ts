export function formatDate(dateString: string | undefined): string {
    if (!dateString) return "";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString
      };
      return new Intl.DateTimeFormat('pt-BR').format(date);
  }